import { faInstagram, faFacebookSquare, faMedium, faSpotify } from '@fortawesome/fontawesome-free-brands';

export const info = {
  links: [
    { name: 'resume', url: 'https://drive.google.com/file/d/1Qi4OPekK7N1xIh4xYIygSKWydC5KibjK/view?usp=sharing' },
    { name: 'photo',  url: 'https://photo.masonchan.co' },
    { name: 'code',   url: 'https://github.com/mscott2757' },
  ],
  accounts: [
    { icon: faInstagram, url: 'https://www.instagram.com/masonchan_/', id: 'ig' },
    { icon: faFacebookSquare, url: 'https://www.facebook.com/profile.php?id=100000034912802', id: 'fb' },
    { icon: faMedium, url: 'https://medium.com/@mscott2757', id: 'md' },
    { icon: faSpotify, url: 'https://open.spotify.com/user/122383669', id: 'sp' },
  ]
}

export const banner = {
  imgSrc: require('./images/kyoto-station.jpg'),
  description: 'Kyoto Station, January 2018'
}
