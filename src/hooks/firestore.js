import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { get, isEmpty, map } from 'lodash';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { db } from '../server/firebase';

const useDocsQuery = (col) =>
	useQuery({
		queryKey: [col],
		queryFn: async () => {
			const colRef = collection(db, col);

			const snapshot = await getDocs(colRef);

			return map(get(snapshot, 'docs', []), (doc) => ({
				id: doc.id,
				...doc.data(),
			}));
		},
	});

const useDocQuery = (col, id) =>
	useQuery({
		queryKey: [col, id],
		queryFn: async () => {
			if (!id) return;
			const docRef = doc(db, col, id);

			const snapshot = await getDoc(docRef);

			return {
				id: snapshot.id,
				...snapshot.data(),
			};
		},
		enabled: !isEmpty(id),
	});

const useAddDoc = (col, options) => {
	const queryClient = useQueryClient();
	const colRef = collection(db, col);

	return useMutation({
		mutationFn: async (data) => {
			const res = await addDoc(colRef, data);

			return res?.id;
		},
		onSuccess: (id) => {
			if (!isEmpty(id)) queryClient.invalidateQueries([col]);
		},
	});
};

const useEditDoc = (col, options) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ id, data }) => {
			if (isEmpty(id)) return undefined;

			await updateDoc(doc(db, col, id), data);

			return id;
		},
		onSuccess: (id) => {
			if (!isEmpty(id)) {
				queryClient.invalidateQueries([col]);
				queryClient.invalidateQueries([col, id]);
			}
		},
	});
};

export const useDeleteDoc = (col, options) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id) => {
			await deleteDoc(doc(db, col, id));
		},
		onSuccess: () => {
			queryClient.invalidateQueries([col]);
		},
	});
};

export { useAddDoc, useDocQuery, useDocsQuery, useEditDoc };
