export interface Brick {
    id: string;
    name: string;
    color: string;
    size: {
        width: number;
        height: number;
        depth: number;
    };
}

export interface BrickState {
    bricks: Brick[];
    loading: boolean;
    error: string | null;
}