export class RestaurantModel {


    restaurantId: number;
    restaurantName: string;
    restaurantLocation: string;

    /**
     * Getter $restaurantLocation
     * @return {string}
     */
    public get $restaurantLocation(): string {
        return this.restaurantLocation;
    }

    /**
     * Setter $restaurantLocation
     * @param {string} value
     */
    public set $restaurantLocation(value: string) {
        this.restaurantLocation = value;
    }

    /**
     * Getter $restaurantId
     * @return {number}
     */
    public get $restaurantId(): number {
        return this.restaurantId;
    }

    /**
     * Getter $restaurantName
     * @return {string}
     */
    public get $restaurantName(): string {
        return this.restaurantName;
    }

    /**
     * Setter $restaurantId
     * @param {number} value
     */
    public set $restaurantId(value: number) {
        this.restaurantId = value;
    }

    /**
     * Setter $restaurantName
     * @param {string} value
     */
    public set $restaurantName(value: string) {
        this.restaurantName = value;
    }

}
