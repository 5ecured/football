import ronaldo from '../asset/ronaldo.jpg'
import messi from '../asset/messi.jpg'
import drogba from '../asset/drogba.png'
import kroos from '../asset/kroos.jpg'
import lewandowski from '../asset/lewandowski.jpg'
import kaka from '../asset/kaka.jpg'
import torres from '../asset/torres.jpg'
import eto from '../asset/eto.jpg'
import maguire from '../asset/maguire.jpeg'

//TODO change playerIntarface (remove id maybe) as i plan to remove all static data and instead fetch from mongodb
interface playerInterface {
    id?: string,
    _id?: null,
    name: string
    club: string,
    photo?: string,
    important: boolean
}

export const initialData: playerInterface[] = [
    {
        id: '1',
        name: 'Cristiano Ronaldo',
        club: 'Manchester United',
        photo: ronaldo,
        important: true
    },
    {
        id: '2',
        name: 'Lionel Messi',
        club: 'Paris Saint Germain',
        photo: messi,
        important: false
    },
    {
        id: '3',
        name: 'Didier Drogba',
        club: 'Chelsea',
        photo: drogba,
        important: true
    },
    {
        id: '4',
        name: 'Toni Kroos',
        club: 'Real Madrid',
        photo: kroos,
        important: true
    },
    {
        id: '5',
        name: 'Robert Lewandowski',
        club: 'Barcelona',
        photo: lewandowski,
        important: false
    },
    {
        id: '6',
        name: 'Kaka',
        club: 'AC Milan',
        photo: kaka,
        important: true
    },
    {
        id: '7',
        name: 'Fernando Torres',
        club: 'Liverpool',
        photo: torres,
        important: true
    },
    {
        id: '8',
        name: 'Samuel Eto',
        club: 'Inter Milan',
        photo: eto,
        important: false
    },
    {
        id: '9',
        name: 'Harry Maguire',
        club: 'Manchester United',
        photo: maguire,
        important: false
    }
]