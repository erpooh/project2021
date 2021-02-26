import Head from "next/head";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { makeAutoObservable, toJS, configure } from "mobx";
import { observer } from "mobx-react-lite";
//////////////////////////////////////////////////////////////////////////////

const View = observer(() => {
    return <>1</>;
});

export default View;
