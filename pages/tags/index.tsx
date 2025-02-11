import Link from 'next/link'
import { GetStaticProps } from 'next'
import Layout from '../../components/layout'
import { getAllTagsAndCount, TagsAndCounts } from '../../lib/tags'

const Tags = ({ allTagsAndCounts }: { allTagsAndCounts: TagsAndCounts }) => {
  return (
    <Layout>
      <section className="mx-auto w-4/5 md:w-1/2">
        <ul className="list-none m-0 mx-auto flex flex-wrap">
          {allTagsAndCounts.map(({ tagName, count }) => (
              <li className="py-0.5 px-1.5 mb-4 mr-4 bg-noshimehana text-white" key={tagName}>
                <Link href={`/tags/${encodeURIComponent(tagName)}`}><a>{tagName} ({count})</a></Link>
              </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Tags

export const getStaticProps: GetStaticProps = async () => {
  const allTagsAndCounts = getAllTagsAndCount()
  return {
    props: {
      allTagsAndCounts
    }
  }
}