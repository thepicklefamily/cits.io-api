import { isNullOrUndefined } from "util";

export const sortTree = (tree) => {
  const newTree = { children: tree };
  
  const recurse = (node) => {
    if ( node.children ) {
      node.children = node.children.sort( (a, b) => {
        return a.id - b.id;
      });
      
      node.children.forEach( post => {
        recurse(post);
      });
    }
  }
  recurse(newTree)
  return tree;
}

export const postTree = (posts) => {
  const map = {};
  const roots = [];
  let node;
  let i;
  
  for (i = 0; i < posts.length; i++ ) {
    map[posts[i].id] = i;
    posts[i].children = [];
  }
  
  
  for ( i = 0; i < posts.length; i++) {
    node = posts[i];
    if( node.parentid !== null) {
      posts[map[node.parentid]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}