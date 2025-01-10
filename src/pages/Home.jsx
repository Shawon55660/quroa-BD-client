
import Section2 from '../allComponents/Section2';
import Section_1 from '../allComponents/Section_1';
import Helmets from '../sharedComponent/Helmets';

import Bannar from './Bannar';
import RecentQueries from './RecentQueries';

const Home = () => {
    
    return (
        <div>
            <Helmets heading='Home'></Helmets>
            <Bannar></Bannar>
            <RecentQueries></RecentQueries>
            <Section_1></Section_1>
            <Section2></Section2>
            
            
            
        </div>
    );
};

export default Home;