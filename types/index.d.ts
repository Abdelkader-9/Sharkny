enum Topic {
  frontend = "Frontend",
  backend = "Backend",
  devtools = "Dev Tools",
  DevOpsCloud = "DevOps & Cloud",
  ComputerScience = "Computer Science",
  LearningCareer = "Learning & Career",
}

type Articles = Models.DocumentList<Models.Document> & {
  $id: string;
  name: string;
  subject: Subject;
  topic: string;
  duration: number;
  bookmarked: boolean;
};

interface CreateArticle {
  title: string;
  subtitle: string;
  description: string;
  topic: string;
}

interface GetAllArticles {
  limit?: number;
  page?: number;
  topic?: string | string[];
}
