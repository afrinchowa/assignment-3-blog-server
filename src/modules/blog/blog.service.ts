import { IBlog } from './blog.interface';
import { BlogModel } from './blog.model';
interface BlogQuery {
  search?: string;
  sort?: string;
  filter?: string;
}
const createBlogIntoDB = async (blogData: IBlog) => {
  const result = await BlogModel.create(blogData);
  return result;
};
const getAllBlogsFromDB = async (query: BlogQuery) => {
  const { search, sort, filter } = query;

  // Define filters as a Record<string, unknown>
  const filters: Record<string, unknown> = {};

  if (search) {
    filters.title = { $regex: search, $options: 'i' }; // Case-insensitive regex
  }

  if (filter) {
    filters.tags = { $in: filter.split(',') }; // Filter by tags
  }

  const result = await BlogModel.find(filters).sort(sort || '-createdAt'); // Default sorting
  return result;
};

const getSingleBlogFromDB = async (id: string) => {
  const result = await BlogModel.findById(id);
  return result;
};

const updateBlogInDB = async (id: string,data:IBlog) => {
  const result = await BlogModel.findOneAndUpdate({id,data,new:true});
  return result;
};

const deleteBlogFromDB = async (id: string) => {
  const result = await BlogModel.findOneAndDelete({id});
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getSingleBlogFromDB,
  updateBlogInDB,
  deleteBlogFromDB,
};
