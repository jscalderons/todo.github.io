import { addDoc, updateDoc, collection, CollectionReference, deleteDoc, doc, DocumentData, getDocs, onSnapshot, QuerySnapshot, Unsubscribe } from 'firebase/firestore';
import { database } from '../firebase';
import Task from '../types/TaskType';

const TasksService = {
  ref(): CollectionReference<DocumentData> {
    return collection(database, `tasks`);
  },

  map(snapshot: QuerySnapshot<DocumentData>): Task[] {
    return snapshot.docs.map((doc): Task => {
      const data = doc.data();
      return { 
        id: doc.id,
        name: data.name,
        status: data.status || false
      };
    });
  },

  subscription(callback: (snapshot: QuerySnapshot<DocumentData>) => void): Unsubscribe {
    return onSnapshot(this.ref(), callback)
  },

  async get(): Promise<Task[]> {
    const snapshot = await getDocs(this.ref());

    return this.map(snapshot);
  },

  // async getById(taskId: string): Promise<Task> {
  //   try {
  //     const response = await axios.get(`${API_URL}/tasks/${taskId}`);
      
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // },

  async add(name: string): Promise<void> {
    await addDoc(this.ref(), { name });
  },

  async update(taskId: string, data: any): Promise<void> {
    await updateDoc(doc(database, `tasks/${taskId}`), data);
  },

  async remove(taskId: string): Promise<void> {
    await deleteDoc(doc(database, `tasks/${taskId}`));
  },
};

export default TasksService;
