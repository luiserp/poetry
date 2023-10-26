<template>
    <NuxtLayout>
        <section @mousemove="editCursor" @touchmove="editCursor" ref="section" class="relative top-32 pb-20 pt-4">
            <ContentDoc v-slot="{ doc }" path="/mirror">
                <div class="relative">
                    <!-- <article class="absolute text-black reversed">
                        <div class="mt-32 flex flex-wrap items-center hover-this">
                            <div class="mx-auto -mt-8 w-full px-4 md:w-10/12 reversed">
                                <h3 class="mb-3 font-bold">
                                    {{ reverseString(doc.title) }}
                                </h3>
                                <ContentRenderer :value="reverseStringDoc({...doc})" />
                            </div>
                        </div>
                    </article> -->
                    <article class="absolute text-white">
                        <div class="mt-32 flex flex-wrap items-center hover-this">
                            <div class="mx-auto -mt-8 w-full px-4 md:w-10/12">
                                <h3 class="mb-3 font-bold">
                                    {{ doc.title }}
                                </h3>
                                
                                <ContentRenderer :value="doc" />
                            </div>
                        </div>
                    </article>
                </div>
            </ContentDoc>
        </section>
        <div ref="cursor" class="cursor"></div>
    </NuxtLayout>
</template>

<script setup>
import {ref} from 'vue'

const section = ref(null);
const cursor = ref(null);

const editCursor = e => {
    if (cursor.value) {
        const { clientX: x, clientY: y } = e;
        cursor.value.style.left = x + 'px';
        cursor.value.style.top = y + 'px';
        cursor.value.style.transform = 'translate(-50%, -50%)';
    }
};

function reverseString(str) {
    return str.split("").reverse().join("");
}

function reverseStringDoc(doc) {
    let newDoc = JSON.parse(JSON.stringify(doc))


    reverseStringChild(newDoc.body);

    return {...newDoc};
}

function reverseStringChild(element) {
    // For every children in the body recursively reverse the string
    for (const child of element.children) {

        // console.log(child);

        if (child.type === 'element' && child.tag === 'p') {
            reverseStringChild(child);
        }

        if (child.type === 'text') {
            child.value = reverseString(child.value);
        }
    }
}

</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  /* cursor: none; */
}

.hover-this {
  transition: all 0.3s ease;
}

.cursor {
  pointer-events: none;
  position: fixed;
  padding: 10rem;
  background-color: #fff;
  border-radius: 50%;
  mix-blend-mode: difference;
  transition: transform 0.3s ease;;
}

.hover-this:hover ~ .cursor {
  transform:translate(-50%, -50%) scale(8);
}

@media(max-width: 900px) {  
  .hover-this {
    width: 100%;
    padding: 20px 0;
    display: inline-block;
  }
}

.reversed * p {
    color: black;
}

p {
    color: white;
} 

</style>