import { useState } from 'react'

import office from '../assets/office.jpg'
import business from '../assets/business.jpg'
import shopping from '../assets/shopping.jpg'
import analysis from '../assets/analysis.jpg'
import older from '../assets/older.jpg'


const Services = () => {


    const [isLoading, setIsLoading] = useState(true);

    const startPage = () => {
        window.scrollTo(0, 0);
    
        const images = document.querySelectorAll('img');
    
        const loadImage = (image) => {
            return new Promise((resolve) => {
                if (image.complete) {
                    resolve();
                } else {
                    image.addEventListener('load', resolve);
                }
            });
        };
    
        const imagePromises = Array.from(images).map((image) => loadImage(image));
    
        Promise.all(imagePromises).then(() => {
            setIsLoading(false);
        });
    }
    


    const cardInfo = [
        {
            h2: 'Service 1:',
            h3: 'Investment consulting',
            
            h5_1: 'Description:',
            p1_1: 'Get personal advice and strategies for investing in the capital markets.',
            p1_2: '💼📈🤝📚',

            h5_2: 'Prices:',
            p2_price: '$99 per month',

            h5_3: 'Conditions:',
            p3_1: 'Minimum contract term - 6 months.',

            img: business,
        },
        {
            h2: 'Service 2:',
            h3: 'Online Commerce',
            
            h5_1: 'Description:',
            p1_1: 'Trade stocks, bonds and cryptocurrencies through our online platform.',
            p1_2: '💹📊💼💻',

            h5_2: 'Prices:',
            p2_price: 'Free registration; commissions on trade.',
                        
            h5_3: 'Conditions:',
            p3_1: 'Register with personal profile.',

            img: shopping,
        },
        {
            h2: 'Service 3:',
            h3: 'Market Analysis',
            
            h5_1: 'Description:',
            p1_1: 'Get analysis and forecasts on the development of financial markets.',
            p1_2: '🔍📈📊🧮',

            h5_2: 'Prices:',
            p2_price: '$49 per month',
            
            h5_3: 'Conditions:',
            p3_1: 'Paid service subscription.',

            img: analysis,
        },
        {
            h2: 'Service 4:',
            h3: 'Real Estate Investments',
            
            h5_1: 'Description:',
            p1_1: 'Invest in real estate with the help of our experts.',
            p1_2: '🏠💼👩‍💼🏢',

            h5_2: 'Prices:',
            p2_price: 'From 2% commission on transaction value.',
            
            h5_3: 'Conditions:',
            p3_1: 'Minimum investment of $10,000.',

            img: office,
        },
        {
            h2: 'Service 5:',
            h3: 'Retirement Planning',
            
            h5_1: 'Description:',
            p1_1: 'Create a personal retirement plan and manage your investments for the future.',
            p1_2: '📅💰📈👩‍💼',

            h5_2: 'Prices:',
            p2_price: '$199 per year',
            
            h5_3: 'Conditions:',
            p3_1: 'Annual subscription.',

            img: older,
        },
    ]






  return {
    isLoading,
    cardInfo,
    startPage,
  }
}

export default Services
