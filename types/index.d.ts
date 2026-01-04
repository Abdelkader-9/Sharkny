enum Topic {
  frontend = "Frontend",
  backend = "Backend",
  devtools = "Dev Tools",
  DevOpsCloud = "DevOps & Cloud",
  ComputerScience = "Computer Science",
  LearningCareer = "Learning & Career",
  AIMachineLearning = "AI & Machine Learning",
  MobileDevelopment = "Mobile Development",
  GameDevelopment = "Game Development",
  Cybersecurity = "Cybersecurity",
  DataScience = "Data Science",
}
interface SearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}


type Articles = Models.DocumentList<Models.Document> & {
  $id: string;
  name: string;
  subject: Subject;
  topic: string;
  duration: number;
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
  title?: string | string[];
}

interface ArticleDetailsProps {
  companionId: string;
  subject: string;
  topic: string;
  name: string;
  userName: string;
  userImage: string;
}