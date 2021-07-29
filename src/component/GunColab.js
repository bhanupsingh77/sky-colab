import React, { useEffect, useMemo, useState, useCallback } from "react";
import Gun from "gun";
// Import the Slate editor factory.
import { createEditor } from "slate";
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";
// Import the `Editor` and `Transforms` helpers from Slate.
import { Editor, Transforms, Text } from "slate";

import * as Automerge from "automerge";

// initialize gun locally
// sync with as many peers as you would like by passing in an array of network uris
const gun = Gun({
  peers: ["https://p2p-relay-server.herokuapp.com/gun"],
});

const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

// Define a React component to render leaves with bold text.
const Leaf = (props) => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}
    >
      {props.children}
    </span>
  );
};

const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.bold === true,
      universal: true,
    });

    return !!match;
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "code",
    });

    return !!match;
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "code" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },
};
let doc1 = Automerge.from({ docData: ["123", 12] }, "123876");
let doc2 = Automerge.from({ docData: ["12379", 12] }, "1241");

function GunColab() {
  // Create a Slate editor object that won't change across renders.
  const editor = useMemo(() => withReact(createEditor()), []);
  // Keep track of state for the value of the editor.
  const [testValue, setTestValue] = useState(null);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);
  //Automerge start
  // doc1 = Automerge.change(doc1, "Add card", (doc) => {
  //   doc.cards.push({ title: "Rewrite everything in Clojure", done: false });
  // });
  // doc1 = Automerge.change(doc1, "Add another card", (doc) => {
  //   doc.cards.insertAt(0, {
  //     title: "Rewrite everything in Haskell",
  //     done: false,
  //   });
  // });
  // console.log("doc1", typeof doc1, doc1.docData, doc2.docData);

  // doc1 = Automerge.applyChanges(doc1, changes);
  function updateDoc1(value) {
    let doc1New = Automerge.change(doc1, (doc) => {
      // console.log("doc.doc1Data", doc.doc1Data, doc1);
      doc.docData[0] = "егггггшсфгйййййййшс";
    });
    // const changes = JSON.stringify(Automerge.getChanges(doc1, doc1New));
    // console.log("diff", JSON.parse(changes));
    const changes = JSON.stringify(Automerge.getChanges(doc1, doc1New));
    let d = Array.from(JSON.parse(changes));
    // let k = JSON.parse(d);
    console.log("d", Automerge.getChanges(doc1, doc1New));
    // console.log("diff", Uint8Array.from(d));

    let contentData = JSON.stringify(changes);
    const content = gun.get("content");
  }

  // Automerge end
  useEffect(() => {
    gun
      .get("content")
      .map()
      .on((data) => {
        // console.log("gun data send ", data, JSON.parse(data), doc2);
        // setValue(JSON.parse(data));
        // let changes = Uint8Array.from(JSON.parse(data));
        // const doc2New = Automerge.applyChanges(doc2, changes);
        // console.log("doc2NEW", doc2New);
      });
  }, []);

  function array2Object(arr) {
    let obj = {};
    // console.log("ss", Gun.list);
    Gun.list.map(arr, function (v, f, t) {
      if (Gun.list.is(v) || Gun.obj.is(v)) {
        obj[f] = array2Object(v);
        return;
      }
      obj[f] = v;
    });
    return obj;
  }

  function numberKeyObject2Array(obj) {
    console.log("inedx0bj", typeof obj);
    let object = JSON.parse(obj);
    let array = [];
    for (const key in object) {
      console.log(`key ${key}`);
      array.push(object[key]);
    }
    // for (let i = 1; i <= Object.keys(obj).length; i++) {
    //   array.push(obj[i]);
    // }
    console.log("converted array from obj", array);
    return array;
  }

  // Define a rendering function based on the element passed to `props`. We use
  // `useCallback` here to memoize the function for subsequent renders.
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  // Define a leaf rendering function that is memoized with `useCallback`.
  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  // console.log("gunDbData -", gunDbData);
  return (
    // Add the editable component inside the Slate context.
    <Slate
      editor={editor}
      value={value}
      onChange={(value) => {
        // setValue(value);
        // console.log(`value ${JSON.stringify(value)}`);
        // console.log("value - ", value);

        // const obj = array2Object(value);
        // console.log(`obj obj - ${JSON.stringify(obj)}`);
        // console.log("real obj - ", numberKeyObject2Array(obj));
        // Save the value to Local Storage.
        let contentData = JSON.stringify(value);
        // const content = gun.get("content").put({
        //   data: contentData,
        // });
        // content.set({ _data: ["k"] });
        // gun
        //   .get("content")
        //   .once((data) => console.log(`data ${JSON.parse(data)}`));
        console.log(
          `test01 ${gun
            .get("content")
            .map()
            .once((obj, key) => {
              console.log(obj, "key - ", key);
              // setValue(JSON.parse(obj));
            })}`
        );
        updateDoc1(contentData);
      }}
    >
      <div>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleBoldMark(editor);
          }}
        >
          Bold
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleCodeBlock(editor);
          }}
        >
          Code Block
        </button>
      </div>
      <Editable
        className="m-2 border-2 border-red-300"
        // Pass in the `renderElement` function.
        renderElement={renderElement}
        // Pass in the `renderLeaf` function.
        renderLeaf={renderLeaf}
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return;
          }

          // Replace the `onKeyDown` logic with our new commands.
          switch (event.key) {
            case "`": {
              event.preventDefault();
              CustomEditor.toggleCodeBlock(editor);
              break;
            }

            case "b": {
              event.preventDefault();
              CustomEditor.toggleBoldMark(editor);
              break;
            }
          }
        }}
      />
    </Slate>
  );
}

export default GunColab;
