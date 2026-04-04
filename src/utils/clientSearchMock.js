import searchResultsMock from '../mocks/searchResults.json'
import biryaniMock from '../mocks/search_results/biryani.json'
import pizzaMock from '../mocks/search_results/pizza.json'
import burgerMock from '../mocks/search_results/burger.json'
import chickenMock from '../mocks/search_results/chicken.json'
import paneerMock from '../mocks/search_results/paneer.json'
import dosaMock from '../mocks/search_results/dosa.json'
import chineseMock from '../mocks/search_results/chinese.json'
import coffeeMock from '../mocks/search_results/coffee.json'
import shakeMock from '../mocks/search_results/shake.json'
import noodlesMock from '../mocks/search_results/noodles.json'
import momosMock from '../mocks/search_results/momos.json'
import rollMock from '../mocks/search_results/roll.json'
import sandwichMock from '../mocks/search_results/sandwich.json'
import pohaMock from '../mocks/search_results/poha.json'
import kebabMock from '../mocks/search_results/kebab.json'
import thaliMock from '../mocks/search_results/thali.json'
import pavBhajiMock from '../mocks/search_results/pav_bhaji.json'
import northIndianMock from '../mocks/search_results/north_indian.json'
import southIndianMock from '../mocks/search_results/south_indian.json'

const KEYWORD_MOCKS = [
    { keys: ['biryani'], data: biryaniMock },
    { keys: ['pizza'], data: pizzaMock },
    { keys: ['burger'], data: burgerMock },
    { keys: ['chicken', 'grilled chicken'], data: chickenMock },
    { keys: ['paneer'], data: paneerMock },
    { keys: ['dosa'], data: dosaMock },
    { keys: ['chinese'], data: chineseMock },
    { keys: ['coffee'], data: coffeeMock },
    { keys: ['shake', 'milkshake', 'smoothie'], data: shakeMock },
    { keys: ['noodles', 'noodle', 'hakka'], data: noodlesMock },
    { keys: ['momos', 'momo', 'dim sum'], data: momosMock },
    { keys: ['roll', 'frankie', 'wrap'], data: rollMock },
    { keys: ['sandwich'], data: sandwichMock },
    { keys: ['poha'], data: pohaMock },
    { keys: ['kebab', 'tikka', 'tandoori'], data: kebabMock },
    { keys: ['thali'], data: thaliMock },
    { keys: ['pav bhaji', 'pav_bhaji'], data: pavBhajiMock },
    { keys: ['north indian', 'punjabi', 'mughlai'], data: northIndianMock },
    { keys: ['south indian', 'idli', 'uttapam'], data: southIndianMock },
]

export function getClientSearchMock(str) {
    const lower = str.toLowerCase()
    for (const entry of KEYWORD_MOCKS) {
        if (entry.keys.some(k => lower.includes(k))) return entry.data
    }
    return searchResultsMock
}
