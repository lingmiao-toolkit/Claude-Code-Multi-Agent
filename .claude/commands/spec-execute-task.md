# /spec-execute-task

Execute a specific task from the spec-driven development plan, then automatically continue with all remaining tasks.

**Parameters:**
- `task-id`: Task number to start from (e.g., `1.1`). If not provided, will start from the next uncompleted task.

**Auto-Execution Behavior:**

1. **Initial Task Execution**: Execute the specified task (or next pending task if no ID provided)
2. **Auto-Takeover**: Immediately after the first task completes, the system automatically takes over
3. **Continuous Execution**: Automatically executes ALL remaining uncompleted tasks in sequence
4. **No User Intervention**: User does not need to approve each task - execution continues until all tasks are done
5. **Progress Tracking**: Shows real-time progress and marks tasks as completed in tasks.md
6. **Recovery**: Can resume from interruptions if Claude Code is restarted

**Process:**

1. **Load Specifications**: Read `requirements.md`, `design.md`, and `tasks.md` from the spec directory
2. **Execute First Task**: 
   - If task-id provided, execute that specific task
   - If no task-id, find and execute the next uncompleted task
   - Mark task as completed: `- [x] **Task X.X**: ...`
3. **Auto-Takeover Triggered**: Hook system automatically starts the auto-task-executor
4. **Continuous Execution**:
   - Auto-executor takes over and runs all remaining `- [ ]` tasks
   - Each completed task triggers the next one automatically
   - Provides progress updates and final summary
   - Handles errors gracefully and continues with next tasks

**Features:**
- ✅ **One-Command Start**: Single command starts complete automation
- ✅ **Zero User Intervention**: No approvals needed after initial command
- ✅ **Persistent State**: Tasks marked in tasks.md, not separate JSON files
- ✅ **Interruption Recovery**: Resumes automatically if Claude Code restarts
- ✅ **Progress Monitoring**: Real-time status and completion tracking
- ✅ **Error Resilience**: Failed tasks don't stop overall execution

**Emergency Controls:**
- Use "Emergency Stop Execution" hook to halt auto-execution
- Use "Show Execution Status" hook to check current progress
- Use "Force Start All Tasks" hook to restart if needed

**Example Usage:**
```
/spec-execute-task 1.1
```
This will execute Task 1.1, then automatically continue with 1.2, 1.3, 2.1, etc. until all tasks are complete.

```
/spec-execute-task
```
This will start from the next uncompleted task and execute all remaining tasks automatically.