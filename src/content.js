import { faInstagram, faLinkedinIn, faMedium, faSpotify } from '@fortawesome/fontawesome-free-brands';

export const info = {
  links: [
    { name: 'photo',  url: 'https://photo.masonchan.co' },
    { name: 'code',   url: 'https://github.com/mscott2757' },
  ],
  accounts: [
    { icon: faInstagram, url: 'https://www.instagram.com/masonchan_/', id: 'ig' },
    { icon: faLinkedinIn, url: 'https://www.linkedin.com/in/mason-chan-scott/', id: 'in' },
    { icon: faMedium, url: 'https://medium.com/@mscott2757', id: 'md' },
    { icon: faSpotify, url: 'https://open.spotify.com/user/122383669', id: 'sp' },
  ]
}

export const banner = {
  imgSrc: require('./images/kyoto-station.jpg'),
  description: 'Kyoto Station, January 2018'
}

export const resume = {
  file: require('./resume.pdf')
}
