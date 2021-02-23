import Head from "next/head";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
//////////////////////////////////////////////////////// Store
import Common from "../store/common";
const common = new Common();
//////////////////////////////////////////////////////// Component
import IndexView from "../component/indexView";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        return (
            <>
                <IndexView />
            </>
        );
    }
}

export default Home;