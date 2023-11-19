import { ref, computed } from "vue";

export default function useOrder(link) {

    const map = {
      first: {
        male: "primer",
        female: "primera",
      },
      second: {
        male: "segundo",
        female: "segunda",
      },
      third: {
        male: "tercer",
        female: "tercera",
      },
      fourth: {
        male: "cuarto",
        female: "cuarta",
      },
    };

    const femaleOrder = computed(() => {
        return map[link].female;
    });

    const maleOrder = computed(() => {
        return map[link].male;
    });

    return {
        femaleOrder,
        maleOrder,
    }

}