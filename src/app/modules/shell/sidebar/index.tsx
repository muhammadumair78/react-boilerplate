import * as React from 'react';
import { items, MenuI } from './menu';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar-wrap">
                <ul>
                    {items.map((item: MenuI, index: number) => {
                        return <li key={index}>
                            <Link to={item.route}>{item.name}</Link>
                        </li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default SideBar;