import Cookies from 'js-cookie';

/**
 * @method setCache
 * @method getCache
 * @method removeCache
 */
export default class Cache {
   cache: SessionCache | LocalCache | CookieCache;

   constructor(mode: string) {
      switch (mode) {
         case 'session':
            this.cache = new SessionCache();
            break;
         case 'local':
            this.cache = new LocalCache();
            break;
         default:
            this.cache = new CookieCache();
      }
   }

   /**
    * @param {string} key
    * @param {object|array} data
    */
   setCache(key: string, data: any) {
      this.cache.removeCache(key);
      this.cache.setCache(key, JSON.stringify(data));
   }

   /**
    * @param {string} key
    */
   getCache(key: string) {
      let data = this.cache.getCache(key) as string;
      let json = null;
      try {
         json = JSON.parse(data);
         return json;
      } catch {
         return data;
      }
   }

   getCacheRaw(key: string) {
      return this.cache.getCache(key);
   }

   /**
    * @param {string} key
    */
   removeCache(key: string) {
      this.cache.removeCache(key);
   }
}

class CookieCache {
   setCache(key: string, data: any) {
      // expire 10 day
      let cookieConfig = {
         expires: 10,
         path: '/',
         domain: '',
         secure: true,
         sameSite: 'Lax',
      } as Cookies.CookieAttributes;
      Cookies.set(key, data, cookieConfig);
   }
   getCache(key: string) {
      return Cookies.get(key);
   }
   removeCache(key: string) {
      Cookies.remove(key);
   }
}

class SessionCache {
   setCache(key: string, data: any) {
      window.sessionStorage.setItem(key, data);
   }
   getCache(key: string) {
      return window.sessionStorage.getItem(key);
   }
   removeCache(key: string) {
      return window.sessionStorage.removeItem(key);
   }
}

class LocalCache {
   setCache(key: string, data: any) {
      window.localStorage.setItem(key, data);
   }
   getCache(key: string) {
      return window.localStorage.getItem(key);
   }
   removeCache(key: string) {
      window.localStorage.removeItem(key);
   }
}
