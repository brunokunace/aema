import Projects from './../models/Projects'

const show = (uuid) => Projects.query().where('uuid', uuid)

export default {
  show
}
