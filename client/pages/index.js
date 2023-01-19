import { RootLayout, Sidebar, CategoryRow, SidePanel } from '@components';
import { useEffect } from 'react';

export default function Home({ data }) {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <RootLayout>
      <Sidebar />
      <main>
        <div className="container pt-9">
          <h1 className="font-medium text-2xl text-dark max-w-md mb-14">
            <span className="text-accent">Shoppingify </span> allows you to take
            your shopping list wherever you go
          </h1>
          <div>
            {data.categories.map((category) => (
              <CategoryRow key={category._id} category={category} />
            ))}
          </div>
        </div>
      </main>
      <SidePanel />
    </RootLayout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:5000/api/v1/categories/');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
