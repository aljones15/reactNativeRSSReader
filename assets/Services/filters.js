/**
 * sortByPubDate - sorts rss returs by theri publih date
 * @param {Object} an rss item
 * @Param {Object} another rss item
 * @return {number}
 */
export function sortByPubDate(a,b){
    let dateA = new Date(a.pubDate);
    let dateB = new Date(b.pubDate);
    if(dateA > dateB){
      return -1;
    }
    if(dateA < dateB){
      return 1;
    }
    return 0;
};

