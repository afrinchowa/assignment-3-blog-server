import { IBlog } from './blog.interface';
import { BlogModel } from './blog.model';
 export interface BlogQuery {
  search?: string;
  sortBy?: string; // Field to sort by (e.g., title, createdAt)
  sortOrder?: 'asc' | 'desc'; // Order for sorting (ascending or descending)
  filter?: string; // Filter by author ID or other fields
}
const createBlogIntoDB = async (blogData: IBlog) => {
  const result = await BlogModel.create(blogData);
  return result;
};
const getAllBlogsFromDB = async (query: BlogQuery) => {
  const { search, sortBy, sortOrder = 'desc', filter } = query;

  // Define filters as a Record<string, unknown>
  const filters: Record<string, unknown> = {};

  // Handle search filtering
  if (search) {
    filters.title = { $regex: search, $options: 'i' }; // Case-insensitive regex search in title
  }

  // Handle filtering by author (assuming you have an 'author' field in your Blog model)
  if (filter) {
    filters.author = filter; // Assuming 'author' is the field representing the author's ID
  }

  // Define sorting
  const sort: Record<string, 1 | -1> = {};
  if (sortBy) {
    sort[sortBy] = sortOrder === 'asc' ? 1 : -1; // Ascending or descending sorting
  } else {
    sort['createdAt'] = sortOrder === 'asc' ? 1 : -1; // Default to sorting by createdAt
  }

  // Fetch the blogs based on filters and sorting
  const result = await BlogModel.find(filters).sort(sort);
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
