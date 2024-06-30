import Link from 'next/link'

const footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container py-4">
          <div className="copyright">
            &copy; Copyright
            <strong>
              <span>Aniruddha Kadia</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <Link href="/">Aniruddha kadia</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
export default footer
