import ronaldo from '../asset/ronaldo.jpg'
import messi from '../asset/messi.jpg'
import drogba from '../asset/drogba.png'
import kroos from '../asset/kroos.jpg'
import lewandowski from '../asset/lewandowski.jpg'
import kaka from '../asset/kaka.jpg'
import torres from '../asset/torres.jpg'
import eto from '../asset/eto.jpg'
import maguire from '../asset/maguire.jpeg'


interface playerInterface {
    id: number | null
    name: string
    club: string,
    image?: string,
    important: boolean
}

export const initialData: playerInterface[] = [
    {
        id: 1,
        name: 'Cristiano Ronaldo',
        club: 'Manchester United',
        image: ronaldo,
        important: true
    },
    {
        id: 2,
        name: 'Lionel Messi',
        club: 'Paris Saint Germain',
        image: messi,
        important: false
    },
    {
        id: 3,
        name: 'Didier Drogba',
        club: 'Chelsea',
        image: drogba,
        important: true
    },
    {
        id: 4,
        name: 'Toni Kroos',
        club: 'Real Madrid',
        image: kroos,
        important: true
    },
    {
        id: 5,
        name: 'Robert Lewandowski',
        club: 'Barcelona',
        image: lewandowski,
        important: false
    },
    {
        id: 6,
        name: 'Kaka',
        club: 'AC Milan',
        image: kaka,
        important: true
    },
    {
        id: 7,
        name: 'Fernando Torres',
        club: 'Liverpool',
        image: torres,
        important: true
    },
    {
        id: 8,
        name: 'Samuel Eto',
        club: 'Inter Milan',
        image: eto,
        important: false
    },
    {
        id: 9,
        name: 'Harry Maguire',
        club: 'Manchester United',
        image: maguire,
        important: false
    }
]