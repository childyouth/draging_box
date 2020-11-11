export class Point{
    constructor(x,y){
        this.x = x||0; // default value {x = 0} 와 뭐가 다르지?
        this.y = y||0;
    }

    add(point){
        this.x += point.x;
        this.y += point.y;
        return this;
    }

    subtract(point){
        this.x -= point.x;
        this.y -= point.y;
        return this;
    }

    reduce(value){
        this.x *= value;
        this.y *= value;
        return this;
    }

    collide(point, width, height){
        if(this.x >= point.x && this.x <= point.x + width && this.y >= point.y && this.y <= point.y + height){  // 상자 boundary에 충돌
            return true;
        }
        return false;
    }

    clone(){
        return new Point(this.x, this.y);
    }
}