"use server";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

export const createArticle = async (formData:CreateArticle) => {
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('articles')
        .insert({...formData, author })
        .select();

    if(error || !data) throw new Error(error?.message || 'Failed to create an article');
    return data[0];
}

export const getAllArticles = async ({
  limit = 10,
  page = 1,
  topic,
}: GetAllArticles) => {
  const supabase = createSupabaseClient();

  let query = supabase
    .from('articles')
    .select('*');

  // filtering
  if (topic) {
    query = query.or(
      `topic.ilike.%${topic}%,name.ilike.%${topic}%,subject.ilike.%${topic}%`
    );
  }

  // pagination
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  query = query.range(from, to);

  const { data: articles, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return articles;
};

export const getArticle = async (id: string) => {
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('articles')
        .select()
        .eq('id', id);

    if(error) return console.log(error);

    return data[0];
}

export const getUserArticlesHistory = async (userId: string, limit = 10) => {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('article_history')
        .select(`articles:article_id (*)`)
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit)

    if(error) throw new Error(error.message);

    return data.map(({ articles }) => articles);
}

export const getUserArticles = async (userId: string) => {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('articles')
        .select()
        .eq('author', userId)

    if(error) throw new Error(error.message);

    return data;
}