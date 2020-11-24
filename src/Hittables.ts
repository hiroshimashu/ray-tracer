import { Hittable } from "./Hittable";
import { HitRecord } from "./HitRecord";
import { Ray } from "./Ray";

export class Hittables extends Hittable {
    objects: Hittable[] = [];

    clear() {
        this.objects = [];
    }
    
    add(object: Hittable): void {
        this.objects.push(object);
    }

    hit(ray: Ray, minTime: number, maxTime: number, hitRecord: HitRecord): boolean {
        const tempRec: HitRecord | null = null;
        let hitAnything = false;
        let clsestSoFar = maxTime;

        for (const object of this.objects) {
            if (object.hit(ray, minTime, clsestSoFar, tempRec!)) {
                hitAnything = true;
                clsestSoFar = tempRec!.t;
                hitRecord = tempRec!;
            }
        }

        return hitAnything;
    }
    
}