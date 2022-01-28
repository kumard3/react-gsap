/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import * as React from 'react';
import { Header } from "./Header";
import { CardList } from "./CardList";

export default function Home() {
  return (
    <div className="container">
    <Header />
    <CardList />
  </div>
  );
}