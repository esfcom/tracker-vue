<script setup lang="ts">
import { type ClinicalYear } from '@/types'
defineProps<{
    clinicalYear: ClinicalYear,
    campusName: string
}>()

const CampusColor = [
  {campus: "Everett", border: "border-everett", ring:  'ring-everett'},
  {campus: "Spokane", border: "border-spokane", ring: 'ring-spokane'},
  {campus: "Tri-Cities", border: "border-tricities", ring: 'ring-tricities'},
  {campus: "Vancouver", border: "border-vancouver", ring: 'ring-vancouver',}
]

const setCampusColor = (campus: string, type: string) => {
    let borderColor = CampusColor.filter(el => el.campus === campus)
    return type === 'border' ? borderColor[0]?.border : borderColor[0]?.ring
}
</script>
<template>
    <div v-if="clinicalYear">
        <div class="border-4 mt-5" :class="[setCampusColor(campusName, 'border')]">
            <h2 class="pl-3 pt-3 pb-4 sm:text-sm xl:text-base">Academic Year {{ clinicalYear.year }}</h2>
            <table class="table-auto col-span-2 w-full" border="0">
                <thead>
                    <tr class="border-b-2 border-black sm:text-xs lg:text-sm">
                        <th>Class</th>
                        <th>Capacity</th>
                        <th>Current</th>
                        <th>In</th>
                        <th>Out</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item, index in clinicalYear.classes" :key="index"
                        class="text-center odd:bg-gray-100 even:bg-white sm:text-xs lg:text-sm">
                        <td class="pt-2 pb-2">{{ item.overview.classYear }}</td>
                        <td class="pt-2 pb-2">{{ item.overview.capacity }}</td>
                        <td class="pt-2 pb-2"><span
                                :class="[setCampusColor(campusName, 'ring'), 'rounded-full ring px-3.5 py-1.5']">{{
                                item.overview.current }}</span></td>
                        <td class="pt-2 pb-2">{{ item.overview.in }}</td>
                        <td class="pt-2 pb-2">{{ item.overview.out }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

