module.exports = class {
  static getPage(status) {
    let msgs = {}
    switch (status) {
      // case 400:
      //   msgs.title = 'Bad Rqeust'
      //   msgs.message = 'Bad Rqeust'
      //   break
      case 404:
        msgs.title = 'Not Found'
        msgs.message = 'Not Found'
        break
    }
    return msgs
  }

  static test() {
    return 'hello, world'
  }
}
