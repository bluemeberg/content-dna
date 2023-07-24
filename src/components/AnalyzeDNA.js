import { useCallback, useState } from "react";
import { serverInstance } from "../api/axios";

export const useAnalyzeDNA = async (dnaData, number) => {
  const [progressValue, setProgressValue] = useState(0);
  const [progressData, setProgressData] = useState([]);

  const handleProcessBatch = useCallback(
    async (data, batchSize) => {
      const batches = [];
      const numBatches = Math.ceil(data.length / batchSize);
      console.log(numBatches);
      for (let i = 0; i < numBatches; i++) {
        const start = i * batchSize;
        const end = start + batchSize;
        const batch = data.slice(start, end);
        // const result = await fetchData(batch);
        const result = await serverInstance.post("/chatgpt/content/dna", {
          dnaData: batch,
        });
        batches.push(result.data);
        setProgressValue((prevValue) => i);
        setProgressData([...progressData, result.data]);
      }
      return batches;
    },
    [progressData]
  );

  const batches = await handleProcessBatch(dnaData, number);
  return { batches };
};
