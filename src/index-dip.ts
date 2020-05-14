import { ConsoleLogger } from "./ConsoleLogger";
import { CounterInteractor } from "./CounterInteractor";

const counterInteractor = new CounterInteractor(new ConsoleLogger())

counterInteractor.increment()
counterInteractor.increment()
counterInteractor.increment()
