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
    image?: string
}

export const initialData: playerInterface[] = [
    {
        id: 1,
        name: 'Cristiano Ronaldo',
        club: 'Manchester United',
        image: ronaldo
    },
    {
        id: 2,
        name: 'Lionel Messi',
        club: 'Paris Saint Germain',
        image: messi
    },
    {
        id: 3,
        name: 'Didier Drogba',
        club: 'Chelsea',
        image: drogba
    },
    {
        id: 4,
        name: 'Toni Kroos',
        club: 'Real Madrid',
        image: kroos
    },
    {
        id: 5,
        name: 'Robert Lewandowski',
        club: 'Barcelona',
        image: lewandowski
    },
    {
        id: 6,
        name: 'Kaka',
        club: 'AC Milan',
        image: kaka
    },
    {
        id: 7,
        name: 'Fernando Torres',
        club: 'Liverpool',
        image: torres
    },
    {
        id: 8,
        name: 'Samuel Eto',
        club: 'Inter Milan',
        image: eto
    },
    {
        id: 9,
        name: 'Harry Maguire',
        club: 'Manchester United',
        image: maguire
    }
]