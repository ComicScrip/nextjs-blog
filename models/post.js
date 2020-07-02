import loadjson from '../helpers/loadjson'
import path from 'path'

export class PostModel {
  static async getAll() {
    const filePath = path.join(process.cwd(), 'public', 'posts.json')
    return loadjson(filePath)
  }
}