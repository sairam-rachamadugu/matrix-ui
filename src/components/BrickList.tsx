
import React from 'react';
import { Brick } from '../types';

interface BrickListProps {
    bricks: Brick[];
}

const BrickList: React.FC<BrickListProps> = ({ bricks }) => {

    return (
        <div>
            <h2>Brick List</h2>
            <ul>
                {bricks.map((brick: Brick) => (
                    <li key={brick.id}>
                        {brick.name} - {brick.color}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrickList;