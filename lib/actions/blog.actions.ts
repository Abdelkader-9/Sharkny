"use server";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";
import { ar } from "zod/v4/locales";
import { title } from "process";

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
  title,
}: GetAllArticles) => {
  const supabase = createSupabaseClient()

  let query = supabase.from('articles').select('*', { count: 'exact' })

 if (topic && title) { 
    query = query
        .eq('topic', topic)
        .ilike('title', `%${title}%`)
} 
else if (topic) { 
    query = query.eq('topic', topic)
} 
else if (title) { 
    query = query.ilike('title', `%${title}%`)
}


    query = query.range((page - 1) * limit, page * limit - 1);

     const { data: articles, error, count } = await query;

    if(error) throw new Error(error.message);

   return {
    articles: articles || [],
    totalCount: count || 0,
    hasNextPage: count ? count > page * limit : false
  };
}

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