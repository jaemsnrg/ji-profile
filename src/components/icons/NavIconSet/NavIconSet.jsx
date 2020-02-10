import React from 'react';
import { Wrapper } from './navIconSet.style';
import './style.css'
import {Dashboard, Inventory, SalesReport, EditorialInsights, ReadersInsights, DownloadCenter, HelpFaq} from './NavIcon.assets.jsx'

const determineIcon = (hovered, type) => {
    if (type === 'dashboard') {
        return Dashboard(hovered)
    } else if (type === 'inventory') {
        return Inventory(hovered)
    } else if (type === 'salesReport') {
        return SalesReport(hovered)
    }  else if (type === 'editorialInsights') {
        return EditorialInsights(hovered)
    }  else if (type === 'readersInsights') {
        return ReadersInsights(hovered)
    }  else if (type === 'downloadCenter') {
        return DownloadCenter(hovered)
    }  else if (type === 'helpFaq') {
        return HelpFaq(hovered)
    }
}

const NavIconSet = ({hovered, type}) => {
    return ( 
        <Wrapper >
            <svg width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>hovered icon</title>
                {determineIcon(hovered, type)}
            </svg>
        </Wrapper>
     );
}
 
export default NavIconSet;

