import { Subject } from "rxjs";

export class UrlService {

    urlSubject = new Subject<any[]>();

    private urls = [
        {
            id: 1,
            name: 'angular',
            url: 'https://angular.io/docs',
            tags: '#off'
        },
        {
            id: 2,
            name: 'github',
            url: 'https://www.github.com',
            tags: '#off'
        },
        {
            id: 3,
            name: 'angular material',
            url: 'https://material.angular.io/',
            tags: '#on'
        }
    ]

    emitUrlSubject() {
        this.urlSubject.next(this.urls.slice())
    }

    getUrlbyid(id: number) {
        const url = this.urls.find(
            (urlObject) => {
                return urlObject.id === id;
            }
        );
        return url
    }

    SwitchOnAll() {
        for (let url of this.urls) {
            url.tags = "#on"
        };
        this.emitUrlSubject();
    }

    SwitchOnIndex(index: number) {
        this.urls[index].tags = "#on";
        this.emitUrlSubject();
    }

    SwitchOffAll() {
        for (let url of this.urls) {
            url.tags = "#off"
        };
        this.emitUrlSubject();
    }

    SwitchOffIndex(index: number) {
        this.urls[index].tags = "#off";
        this.emitUrlSubject();
    }

    addURL(name: string, tags: string, url: string) {
        const urlObject = {
            id: 0,
            name: '',
            tags: '',
            url: '',
        };
        urlObject.name = name;
        urlObject.tags = tags;
        urlObject.url = url;
        urlObject.id = this.urls[(this.urls.length - 1)].id + 1
        this.urls.push(urlObject);
        this.emitUrlSubject();
    }

}