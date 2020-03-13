import { Model } from 'objection'

class Projects extends Model {
  static get tableName () {
    return 'projects'
  }
}

export default Projects
