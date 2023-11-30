/**
 * (#)application.mjs   1.0.0   11/19/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
 */

import { ClassOne } from "./class-one.mjs";
import { ClassTwo } from "./class-two.mjs";
import { ClassThree } from "./class-three.mjs";
import { Subject } from 'await-notify';

/**
 * The application class.
 */
class Application {
    /**
     * The run method.
     */
    run() {
        const subject = new Subject();

        (async () => {
            this.runClassOne(subject).then(() => {});
            await subject.wait();
            console.log('Done waiting on class one.');

            this.runClassTwo(subject).then(() => {});
            await subject.wait();
            console.log('Done waiting on class two.');

            this.runClassThree(subject).then(() => {});
            await subject.wait();
            console.log('Done waiting on class three.');
        }) ();
    }

    runClassOne(subject) {
        return new Promise(resolve => {
            const classOne = new ClassOne();

            classOne.methodOne(0)
                .then(value => classOne.methodTwo(value))
                .then(value => classOne.methodThree(value))
                .then(value => {
                    console.log(`Final value: ${value}`);
                    subject.notify();
                    resolve();
                });
        });
    }

    runClassTwo(subject) {
        return new Promise(resolve => {
            const classTwo = new ClassTwo();

            classTwo.methodOne(0)
                .then(value => classTwo.methodTwo(value))
                .then(value => classTwo.methodThree(value))
                .then(value => {
                    console.log(`Final value: ${value}`);
                    subject.notify();
                    resolve();
                });
        });
    }

    runClassThree(subject) {
        return new Promise(resolve => {
            const classThree = new ClassThree();

            classThree.methodOne(0)
                .then(value => classThree.methodTwo(value))
                .then(value => classThree.methodThree(value))
                .then(value => {
                    console.log(`Final value: ${value}`);
                    subject.notify();
                    resolve();
                });
        });
    }
}

export { Application };
