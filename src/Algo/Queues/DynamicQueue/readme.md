1. You are required to complete the code of our CustomQueue class. The class should mimic the behaviour of a Queue and implement FIFO semantic.
2. Here is the list of functions that are written in the class
   2.1. add -> Accepts new data if there is space available in the underlying array

   2.2. remove -> Removes and returns value according to FIFO, if available or print
   "Queue underflow" otherwise and return -1.
   2.3. peek -> Returns value according to FIFO, if available or print "Queue
   underflow" otherwise and return -1.
   2.4. size -> Returns the number of elements available in the queue.
   2.5. display -> Prints the elements of queue in FIFO manner (space-separated)
   ending with a line-break.

3. Input and Output is managed for you.
   Input Format
   Input is managed for you
   Output Format
   Output is managed for you
   Question Video

4. You are required to change the body of add function to accept the element even when the queue array is completely full. In that case, you are required to reallocate the queue array (to twice it's size). You should not print "Stack overflow" ever.
   Constraints
   None
   Sample Input
   5
   add 10
   display
   add 20
   display
   add 30
   display
   add 40
   display
   add 50
   display
   add 60
   display
   peek
   remove
   display
   peek
   remove
   display
   peek
   remove
   display
   peek
   remove
   display
   peek
   remove
   display
   peek
   remove
   quit
   Sample Output
   10
   10 20
   10 20 30
   10 20 30 40
   10 20 30 40 50
   10 20 30 40 50 60
   10
   10
   20 30 40 50 60
   20
   20
   30 40 50 60
   30
   30
   40 50 60
   40
   40
   50 60
   50
   50
   60
   60
   60
