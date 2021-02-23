import { makeAutoObservable, toJS, configure } from "mobx";
//////////////////////////////////////////////////////// Module
import Api from "../module/api";

configure({
    enforceActions: "never",
});

//////////////////////////// makeAutoObservable
class Store {
    data = {};

    constructor() {
        makeAutoObservable(this);
    }
}
//////////////////////////// makeAutoObservable

export default Store;
