import Route from '@ember/routing/route';

export default class ArticlesRoute extends Route {
  model() {
    return this.store.findAll('article')
  }
}
