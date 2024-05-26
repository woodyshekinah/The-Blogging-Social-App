def debounce_run_function(func, wait=0.3):
    from time import time, sleep
    last_call = time()
    
    def wrapped_func(*args, **kwargs):
        nonlocal last_call
        elapsed = time() - last_call
        if elapsed < wait:
            sleep(wait - elapsed)
        last_call = time()
        return func(*args, **kwargs)
    
    return wrapped_func