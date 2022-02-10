import React from 'react'

const Provenance = () => {
	return (
	<section className="clickbait4 borders-bottom borders-top">
        <div className="wrapper provenance">
          <h3>Provenance</h3>
          <span>Concatenated Hash: <a target="_blank" href="https://ipfs.io/ipfs/QmZyaNpjFeTzPFBEygeFeNUpsmUyzgrT19LodTnAhHeZt2/concatedHash.json">IPFS Link</a></span><br />
          <span>All Hashes: <a target="_blank" href="https://ipfs.io/ipfs/QmZyaNpjFeTzPFBEygeFeNUpsmUyzgrT19LodTnAhHeZt2/provenanceHash.json">IPFS Link</a></span>
          <span>SHA256 Hash of Concatenated Hash:<br /><span style={{"color": "#222", "background-color": "#ddddc6", "border-radius": "4px", "padding": "4px"}}>865DD9E1C0CEE4C20DE7D0D7FBA4CA52A89585B7691DCB2AAA00C185106042CE</span></span>
        </div>
      </section>)
}

export default Provenance