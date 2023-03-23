import Head from 'next/head'
import React from "react";

import FormList from "@/common/FormList";
import type { Form } from "@/common/FormList";

const mockedForms = [{
    name: 'The first form',
    formId: 'first',
}, {
    name: 'The second form',
    formId: 'second',
}] satisfies ReadonlyArray<Form>;

export default function Home() {
  return (
    <>
      <Head>
        <title>Sad Forms</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FormList forms={mockedForms} />
      </main>
    </>
  )
}
