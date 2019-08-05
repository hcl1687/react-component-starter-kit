import IntlMessageFormat from 'intl-messageformat'
import LANGUAGES from '../i18n'
import get from 'lodash/get'

class I18N {
  constructor () {
    this.languages = Object.assign({}, LANGUAGES)
    const langs = Object.keys(this.languages)
    this.locale = langs.length > 0 ? langs[0] : ''
  }

  getLanguages () {
    return this.languages
  }

  setLanguages (languages) {
    this.languages = Object.assign({}, this.languages, languages)

    return this.languages
  }

  getLocale () {
    return this.locale
  }

  setLocale (locale) {
    this.locale = locale
  }

  translate (key, values) {
    const language = this.languages[this.locale]
    if (!language) {
      return key
    }

    const message = get(language, key) || ''
    return new IntlMessageFormat(message, this.locale).format(values)
  }
}

let instance

export default function getI18n () {
  if (!instance) {
    instance = new I18N()
  }

  return instance
}

export function __ (...args) {
  const I18N = getI18n()
  return I18N.translate(...args)
}
