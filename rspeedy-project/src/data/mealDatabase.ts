import avocadoToast from '../assets/avocado-toast.jpg';
import capreseSalad from '../assets/caprese-salad.jpg';
import chickenBurritoBowl from '../assets/chicken-burrito-bowl.jpg';
import eggBreakfastSandwich from '../assets/egg-breakfast-sandwich.jpg';
import greekYogurt from '../assets/greek-yogurt.jpg';
import grilledChickenSalad from '../assets/grilled-chicken-salad.jpg';
import lentilSoup from '../assets/lentil-soup.jpg';
import mediterraneanHummusPlate from '../assets/mediterranean-hummus-plate.jpg';
import mushroomRisotto from '../assets/mushroom-risotto.jpg';
import oatmealWithFruit from '../assets/oatmeal-with-fruit.jpg';
import peanutButterBananaToast from '../assets/peanut-butter-banana-toast.jpg';
import proteinSmoothie from '../assets/protein-smoothie.jpg';
import quinoaBowl from '../assets/quinoa-bowl.jpg';
import salmonWithRice from '../assets/salmon-with-rice.jpg';
import steakWithVegetables from '../assets/steak-with-vegetables.jpg';
import tofuVegetableCurry from '../assets/tofu-vegetable-curry.jpg';
import tunaSandwich from '../assets/tuna-sandwich.jpg';
import turkeyWrap from '../assets/turkey-wrap.jpg';
import vegetableStirFry from '../assets/vegetable-stir-fry.jpg';
import veggiePasta from '../assets/veggie-pasta.jpg';

export interface Meal {
    id: string;
    name: string;
    calories: number;
    image: string;
}

// Create a mock meal database with 20 food items
export const mealDatabase: Meal[] = [
    {
        id: '1',
        name: 'Grilled Chicken Salad',
        calories: 350,
        image: grilledChickenSalad,
    },
    {
        id: '2',
        name: 'Veggie Pasta',
        calories: 450,
        image: veggiePasta,
    },
    {
        id: '3',
        name: 'Salmon with Rice',
        calories: 520,
        image: salmonWithRice,
    },
    {
        id: '4',
        name: 'Avocado Toast',
        calories: 280,
        image: avocadoToast,
    },
    {
        id: '5',
        name: 'Protein Smoothie',
        calories: 320,
        image: proteinSmoothie,
    },
    {
        id: '6',
        name: 'Quinoa Bowl',
        calories: 420,
        image: quinoaBowl,
    },
    {
        id: '7',
        name: 'Greek Yogurt with Berries',
        calories: 180,
        image: greekYogurt,
    },
    {
        id: '8',
        name: 'Steak with Vegetables',
        calories: 550,
        image: steakWithVegetables,
    },
    {
        id: '9',
        name: 'Vegetable Stir Fry',
        calories: 380,
        image: vegetableStirFry,
    },
    {
        id: '10',
        name: 'Tuna Sandwich',
        calories: 420,
        image: tunaSandwich,
    },
    {
        id: '11',
        name: 'Chicken Burrito Bowl',
        calories: 650,
        image: chickenBurritoBowl,
    },
    {
        id: '12',
        name: 'Mushroom Risotto',
        calories: 480,
        image: mushroomRisotto,
    },
    {
        id: '13',
        name: 'Egg Breakfast Sandwich',
        calories: 390,
        image: eggBreakfastSandwich,
    },
    {
        id: '14',
        name: 'Lentil Soup',
        calories: 250,
        image: lentilSoup,
    },
    {
        id: '15',
        name: 'Caprese Salad',
        calories: 310,
        image: capreseSalad,
    },
    {
        id: '16',
        name: 'Turkey Wrap',
        calories: 430,
        image: turkeyWrap,
    },
    {
        id: '17',
        name: 'Oatmeal with Fruit',
        calories: 290,
        image: oatmealWithFruit,
    },
    {
        id: '18',
        name: 'Tofu Vegetable Curry',
        calories: 410,
        image: tofuVegetableCurry,
    },
    {
        id: '19',
        name: 'Mediterranean Hummus Plate',
        calories: 360,
        image: mediterraneanHummusPlate,
    },
    {
        id: '20',
        name: 'Peanut Butter Banana Toast',
        calories: 340,
        image: peanutButterBananaToast,
    },
];