<template>
  <Listbox as="div" v-model="selected" class="inline-block text-white">
    <div class="relative mt-2">
      <ListboxButton class="relative w-full cursor-default rounded-md bg-blue-500 py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-white focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <span class="block truncate">{{ selected?.name ?? "selecciona" }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-white-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-fit overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="option in options" :key="option.id" :value="option" v-slot="{ active, selected }">
            <li :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-8 pr-4']">
              <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ option.name }}</span>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 left-0 flex items-center pl-1.5']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
  value: {
    type: Object,
    required: true,
  },
  options: {
    type: Array,
    required: true,
    default: () => [
      { id: 1, name: 'Wade Cooper' },
      { id: 2, name: 'Arlene Mccoy' },
      { id: 3, name: 'Devon Webb' },
      { id: 4, name: 'Tom Cook' },
    ],
  },
})

const selected = ref(null);

const emit = defineEmits(['update:modelValue'])

watch(selected, () => {
  emit('update:modelValue', selected.value)
})

</script>